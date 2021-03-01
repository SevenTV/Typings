export namespace API {

	export interface TokenPayload {
		id: string;
		twid: string;
	}
	export namespace OAuth2 {
		export interface AuthCodeGrant {
			access_token: string;
			refresh_token: string;
			expires_in: number;
			scope: string[];
			token_type: 'bearer';
		}
	}
}