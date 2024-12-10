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

export interface otpEmailRequests {
    firstname: string;
    lastname: string;
    email: string;
    public_key: string;
    otp_id: string;
    token: string;
};

export interface workspaceEmailRequests {
    firstname?: string;
    lastname?: string;
    email?: string;
    year?: string;
    workspace_name?: string;
    owner?: string;
    invitation_link?: string;
    owner_email?: string;
  }

export interface genericErrors { code?: number, _original: unknown, details: [{ message: string }] }