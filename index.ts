import * as dotenv from "dotenv";
import "isomorphic-fetch";
import { Client, ClientOptions } from "@microsoft/microsoft-graph-client";
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";
import { DefaultAzureCredential } from "@azure/identity";
import { User } from "@microsoft/microsoft-graph-types";

dotenv.config()

export class Graph {

    client: Client;

    constructor() {
        const credential = new DefaultAzureCredential();
        const authProvider = new TokenCredentialAuthenticationProvider(credential, { scopes: ["https://graph.microsoft.com/.default"] });
        const clientOptions: ClientOptions = {
            defaultVersion: "v1.0",
            debugLogging: false,
            authProvider
        };
        this.client = Client.initWithMiddleware(clientOptions);
    }

    async getUsersAll(): Promise<User[]> {
        const request = await this.client.api("/users/")
            .top(5)
            .get();
        return request.value;
    }

}

const graph = new Graph();
graph.getUsersAll()
    .then((users) => {
        console.log(users);
    }).catch((error) => {
        console.error(error);
    });