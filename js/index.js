import utils from './utils.js';
import { grabRandomUser, populateUsers } from './randomUser.js';

const speakers = [];

const grabSpeakers = async () => {
  for (let i = 0; i < 6; i += 1) {
    const user = await grabRandomUser();
    speakers.push(user);
  }

  populateUsers(speakers);
};

grabSpeakers();
