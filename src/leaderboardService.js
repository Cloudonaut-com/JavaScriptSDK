import {
  Leaderboard,
  ListScoresRequest,
  CountScoresRequest,
  ListScoresOfFriendsRequest,
  CountScoresOfFriendsRequest,
  AddScoreRequest,
  GetScoreRequest,
} from "./objects/leaderboard";
import { Paging } from "./objects/paging";
import Service from "./service";

export default class LeaderboardService extends Service {
  constructor(api) {
    super(api);
    this.settings = new Leaderboard({});
    this.paging = new Paging({});
  }

  ListScores(paging) {
    paging = paging || {};
    paging = paging instanceof Paging ? paging : this.paging;
    const request = new ListScoresRequest(
      this.api.appID,
      this.api.appSecret,
      0,
      0,
      this.settings,
      paging
    );
    return this.ApiCall(request);
  }

  ListScoresAroundMe(paging) {
    paging = paging || {};
    paging = paging instanceof Paging ? paging : this.paging;
    const request = new ListScoresRequest(
      this.api.appID,
      this.api.appSecret,
      this.api.player.playerID,
      this.api.character.characterID,
      this.settings,
      paging
    );
    return this.ApiCall(request);
  }

  ListScoresAroundPlayer(playerID, characterID, paging) {
    paging = paging || {};
    paging = paging instanceof Paging ? paging : this.paging;
    playerID = playerID || 0;
    characterID = characterID || 0;
    const request = new ListScoresRequest(
      this.api.appID,
      this.api.appSecret,
      playerID,
      characterID,
      this.settings,
      paging
    );
    return this.ApiCall(request);
  }

  CountScores() {
    const request = new CountScoresRequest(
      this.api.appID,
      this.api.appSecret,
      this.settings
    );
    return this.ApiCall(request);
  }

  ListScoresOfFriends(paging) {
    paging = paging || {};
    paging = paging instanceof Paging ? paging : this.paging;
    const request = new ListScoresOfFriendsRequest(
      this.api.appID,
      this.api.appSecret,
      this.api.player,
      this.settings,
      paging
    );
    return this.ApiCall(request);
  }

  CountScoresOfFriends() {
    const request = new CountScoresOfFriendsRequest(
      this.api.appID,
      this.api.appSecret,
      this.api.player,
      this.settings
    );
    return this.ApiCall(request);
  }

  GetScore() {
    const request = new GetScoreRequest(
      this.api.appID,
      this.api.appSecret,
      this.api.player.playerID,
      this.api.character.characterID,
      this.settings
    );
    return this.ApiCall(request);
  }

  GetScoreOfPlayer(playerID, characterID) {
    playerID = playerID || 0;
    characterID = characterID || 0; 
    const request = new GetScoreRequest(
      this.api.appID,
      this.api.appSecret,
      playerID,
      characterID,
      this.settings
    );
    return this.ApiCall(request);
  }

  AddScore(score) {
    score = parseFloat(score) || null;
    if (score === null) {
      return Promise.reject("Provide a score");
    }
    const request = new AddScoreRequest(
      this.api.appID,
      this.api.appSecret,
      this.api.player,
      this.api.character.characterID,
      this.settings,
      score
    );
    return this.ApiCall(request);
  }
}
