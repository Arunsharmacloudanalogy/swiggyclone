const User = require('../modals/Users');
module.exports = async (req, res) => {
  const { type, data } = req.body;

  switch (type) {
    case 'user.created':
      handleUserCreated(data, res);
      break;
    case 'user.updated':
      handleUserUpdated(data, res);
      break;
    case 'user.deleted':
      handleUserDeleted(data, res);
      break;
    default:
      res.status(400).send({ success: false, message: 'Unhandled event type' });
  }
};

const handleUserCreated = async (data, res) => {
  const { id, email, username } = data;
  try {
    const user = await User.create({
      clerkId: id,
      email: email_addresses[0].email_address,
      username: username,
    });
    res.status(201).send({ success: true, user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send({ success: false, error: error.message });
  }
};

const handleUserUpdated = async (data, res) => {
  const { id, email_addresses, username } = data;
  try {
    const user = await User.findOne({ where: { clerkId: id } });
    if (user) {
      user.email = email_addresses[0].email_address;
      user.username = username;
      await user.save();
      res.status(200).send({ success: true, user });
    } else {
      res.status(404).send({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).send({ success: false, error: error.message });
  }
};

const handleUserDeleted = async (data, res) => {
  const { id } = data;
  try {
    const user = await User.findOne({ where: { clerkId: id } });
    if (user) {
      await user.destroy();
      res.status(200).send({ success: true, message: 'User deleted' });
    } else {
      res.status(404).send({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send({ success: false, error: error.message });
  }
};