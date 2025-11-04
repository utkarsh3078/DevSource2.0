export const badgeAwardedTemplate = (user, badge) => `
  <h3>🎉 Congratulations ${user.name}!</h3>
  <p>You’ve been awarded the <b>${badge.name}</b> badge for ${badge.reason}.</p>
  <p>Keep up the great work!</p>
  <p>- DevSource Team</p>
`;
