import localConfig from "./local";
import productionConfig from "./production";

const config = "production";

export default function getConfig(): any {
    switch (config) {
        case "production":
            return productionConfig;
        case "local":
            return localConfig;
    }
}
