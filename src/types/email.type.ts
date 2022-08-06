export interface confirmationEmailRequests {
    firstname: string;
    lastname: string;
    email: string;
    public_key: string;
    confirm_id: string;
    token: string;
};

export interface forgotEmailRequests {
    firstname: string;
    lastname: string;
    email: string;
    public_key: string;
    forgot_id: string;
    token: string;
};

export interface genericErrors { code?: number, _original: unknown, details: [{ message: string }] }