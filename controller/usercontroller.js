import User from "../model/user.js";

export async function getAllUser(req, res) {
  const users = await User.find();
  return res.json(users);
}

export async function createUser(req, res) {
  const newuser = new User(req.body);

  await newuser.save();

  res.status(201).json({
    message: "User added successfully",
    data: newuser,
  });
}

export async function bulkCreate(req, res) {
  try {
    const users = await User.insertMany(req.body);
    res.status(201).json({
      message: "Bulk data added successfully",
      data: users,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
}

export async function updateUser(req, res) {
  const userId = req.params.id;

  const updatedData = req.body;

  console.log(updatedData);

  const users = await User.findById(req.params.id);

  if (!users) {
    return res.json({
      message: "user not found",
    });
  }
  users.first_name = updatedData.first_name;
  users.last_name = updatedData.last_name;
  users.email = updatedData.email;
  users.gender = updatedData.gender;
  users.ip_address = updatedData.ip_address;
  console.log(users);

  await users.save();

  res.json({
    message: "Data are updated",
    data: users,
  });
}

export async function deleteUser(req, res) {
  const deletedUser = await User.findByIdAndDelete(req.params.id);

  if (!deletedUser) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json({
    message: "User deleted successfully",
    data: deletedUser,
  });
}