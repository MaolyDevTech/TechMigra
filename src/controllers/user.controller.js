const userService = require('../services/user.service');


const create = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).send({ message: "Submit all fields for registration" })
    }

    const user = await userService.createService(req.body);

    if (!user) {
        return res.status(400).send({ message: "Error creating User" });
    }

    res.status(201).send({
        message: "User created successfully",
        user: {
            id: user._id,
            name,
            username,
            email,
            avatar,
            background,
        },
    });
};

const findAll = async (req, res) => {
    const users = await userService.findAllService();

    if (!users.length === 0) {
        return res.status(400).send({ message: "There are not registered users" });
    }

    res.status(200).send({
        message: "Users retrieved successfully",
        users,
    });

};

const findById = async (req, res) => {
    //const id = req.id;

    /*if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid id" });
    }*/

    const user = req.user;
    //await userService.findByIdService(id);

    /*if (!user) {
        return res.status(400).send({ message: "User not found" });
    }*/

    /*res.status(200).send({
        message: "User retrieved successfully",
        user,
    });*/

    res.send(user);
};

const update = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;
    
    if (!name && !username && !email && !password && !avatar && !background) {
        res.status(400).send({ message: "Submit at least one field for update" })
    }
    
    const {id, user} = req;
    
    /*if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid id" });
    }*/

    /*const user = await userService.findByIdService(id);*/

    /*if (!user) {
        return res.status(400).send({ message: "User not found" });
    }*/

    await userService.updateService(
        id,
        name,
        username,
        email,
        password,
        avatar,
        background
    );
    
    res.status(200).send({
        message: "User updated successfully",
        user,
    });



}


module.exports = { create, findAll, findById, update };
