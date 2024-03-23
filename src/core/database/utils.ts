import { IDatabaseConfigAttributes } from "src/interface/dot-env.interface";

export function getURI(configs: IDatabaseConfigAttributes) {
    return `${configs.dialect}://${configs.username}:${configs.password}@${configs.host}/neondb?sslmode=require` as const
}