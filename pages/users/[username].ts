import { NextApiRequest, NextApiResponse } from 'next';
import { getProfile, getUserByUsername } from '../../../utils/database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const username = req.query.username;

  if (!username || Array.isArray(username)) {
    return res
      .status(400)
      .json({ errors: [{ message: 'User must have a valid name' }] });
  }
  // if method GET
  if (req.method === 'GET') {
    const user = await getUserByUsername(username);

    if (user) {
      const profile = await getProfile(user.id);

      return res.status(200).json({ user: user, profile: profile });
    }
    return res
      .status(400)
      .json({ errors: [{ message: 'Cinetourist does not exist' }] });
  }

  return res.status(405).json({ errors: [{ message: 'Method not allowed' }] });
}
