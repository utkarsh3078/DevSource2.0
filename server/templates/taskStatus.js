export const taskStatusTemplate = (user, task, status, feedback) => `
  <h3>Hi ${user.name},</h3>
  <p>Your task <b>${task.title}</b> has been <b>${status}</b>.</p>
  <p>Feedback: ${feedback || "No feedback provided"}</p>
  <p>- DevSource Team</p>
`;
