class AuthRequestFull
{
    constructor(appID, appSecret, obj)
    {
        this.appID = appID;
        this.appSecret = appSecret;
        this.controller = "Auth";
        this.action ="Authenticate";
        this.providerUID = obj.providerUID;
        this.displayName =obj.displayName;
        this.displayNameExtra=obj.displayNameExtra;
    }
}

class AnonymousAuthRequestFull extends AuthRequestFull
{
    constructor(appID, appSecret, obj){
        super(appID,appSecret,obj);
        this.provider = 0;
    }
}

class FacebookAuthRequestFull extends AuthRequestFull
{
    constructor(appID, appSecret, obj){
        super(appID,appSecret,obj);
        this.provider = 1;
        this.playerID = obj.playerID;
        this.playerSecret =obj.playerSecret;
    }
}

class FirebaseAuthRequestFull extends AuthRequestFull
{
    constructor(appID, appSecret, obj){
        super(appID,appSecret,obj);
        this.provider = 2;
        this.playerID = obj.playerID;
        this.playerSecret =obj.playerSecret;
    }
}


class PortalTokenAuthRequestFull
{
    constructor(appID, appSecret, token, playerID){
        this.appID = appID;
        this.appSecret = appSecret;
        this.controller = "Auth";
        this.action ="Authenticate";
        this.playerID = playerID;
        this.portalToken = token;
    }
}

class GetPortalTokenRequest
{
    constructor(appID, appSecret, player){
        this.appID = appID;
        this.appSecret = appSecret;
        this.controller = "Auth";
        this.action ="GetPortalToken";
        this.playerID = player.playerID;
        this.playerSecret = player.playerSecret;
    }
}

export { AnonymousAuthRequestFull, FacebookAuthRequestFull, FirebaseAuthRequestFull, PortalTokenAuthRequestFull, GetPortalTokenRequest };