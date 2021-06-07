import {
  AnonymousAuthRequestFull,
  FacebookAuthRequestFull,
  FirebaseAuthRequestFull,
  GetPortalTokenRequest,
  PortalTokenAuthRequestFull,
} from "./objects/authRequest";
import Service from "./service";

export default class AuthService extends Service {
  constructor(api) {
    super(api);
  }

  Anonymous(token) {
    this.api.player.providerUID = token || this.api.player.providerUID;
    const request = new AnonymousAuthRequestFull(
      this.api.appID,
      this.api.appSecret,
      this.api.player
    );
    return this.ApiCall(request).then((data) => {
      if (data.success) {
        this.api.player.playerID = data.player.playerID;
        this.api.player.providerUID = data.player.providerUID;
        this.api.player.playerSecret = data.player.playerSecret;
        this.api.player.displayName = data.player.displayName;
        this.api.player.displayNameExtra = data.player.displayNameExtra;
      }
      return data;
    });
  }

  WithFacebook(token) {
    this.api.player.playerSecret = token || this.api.player.playerSecret;
    const request = new FacebookAuthRequestFull(
      this.api.appID,
      this.api.appSecret,
      this.api.player
    );
    return this.ApiCall(request).then((data) => {
      if (data.success) {
        this.api.player.playerID = data.player.playerID;
        this.api.player.providerUID = data.player.providerUID;
        this.api.player.playerSecret = data.player.playerSecret;
        this.api.player.displayName = data.player.displayName;
        this.api.player.displayNameExtra = data.player.displayNameExtra;
      }
      return data;
    });
  }

  WithFirebase(token) {
    this.api.player.playerSecret = token || this.api.player.playerSecret;
    const request = new FirebaseAuthRequestFull(
      this.api.appID,
      this.api.appSecret,
      this.api.player
    );
    return this.ApiCall(request).then((data) => {
      if (data.success) {
        this.api.player.playerID = data.player.playerID;
        this.api.player.providerUID = data.player.providerUID;
        this.api.player.playerSecret = data.player.playerSecret;
        this.api.player.displayName = data.player.displayName;
        this.api.player.displayNameExtra = data.player.displayNameExtra;
      }
      return data;
    });
  }

  WithPortalToken(playerID, token) {
    const request = new PortalTokenAuthRequestFull(
      this.api.appID,
      this.api.appSecret,
      token,
      playerID
    );
    return this.ApiCall(request).then((data) => {
      if (data.success) {
        this.api.player.playerID = data.player.playerID;
        this.api.player.providerUID = data.player.providerUID;
        this.api.player.playerSecret = data.player.playerSecret;
        this.api.player.displayName = data.player.displayName;
        this.api.player.displayNameExtra = data.player.displayNameExtra;
      }
      return data;
    });
  }

  GetPortalToken() {
    const request = new GetPortalTokenRequest(
      this.api.appID,
      this.api.appSecret,
      this.api.player
    );
    return this.ApiCall(request);
  }
}
