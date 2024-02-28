/* Who is online */

const whosOnline = (friends) => {
  const anv = {
    online: [],
    offline: [],
    away: [],
  };

  for (let i = 0; i < friends.length; i++) {
    const user = friends[i];
    if (user.status === "offline") {
      anv.offline.push(user.username);
    } else if (user.status === "online" && user.lastActivity <= 10) {
      anv.online.push(user.username);
    } else {
      anv.away.push(user.username);
    }
  }
  if (anv.online.length === 0) {
    delete anv.online;
  }
  if (anv.offline.length === 0) {
    delete anv.offline;
  }
  if (anv.away.length === 0) {
    delete anv.away;
  }

  return anv;
};
