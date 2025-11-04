export const taskAssignedTemplate = (user, task) => `
  <h3>Hi ${user.name},</h3>
  <p>You’ve been assigned a new task: <strong>${task.title}</strong>.</p>
  <p>Deadline: ${task.deadline}</p>
  <p>Good luck! 💪</p>
  <p>- DevSource Team</p>
`;
