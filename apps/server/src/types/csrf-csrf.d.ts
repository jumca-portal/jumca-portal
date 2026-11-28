declare module "csrf-csrf" {
  interface DoubleCsrfOptions {
    getSecret: () => string;
    getSessionIdentifier?: (req: import("express").Request) => string;
    cookieName?: string;
    cookieOptions?: Record<string, unknown>;
    size?: number;
    ignoredMethods?: string[];
  }

  export function doubleCsrf(opts: DoubleCsrfOptions): {
    generateCsrfToken: (req: import("express").Request, res: import("express").Response) => string;
    doubleCsrfProtection: import("express").RequestHandler;
  };
}
