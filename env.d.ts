/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly PUBLIC_AUTH0_DOMAIN: string
    readonly PUBLIC_AUTH0_CLIENT_ID: string
    readonly AUTH0_AUDIENCE: string
    readonly AUTH0_ISSUER: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
