import { Router } from "express";

export const userRouter = Router();

// GET /user
// query params: id
userRouter.get('/user', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// POST /user
// body: User
userRouter.post('/user', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// PUT /user
// body: User
userRouter.put('/user', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// DELETE /user
// query params: id
userRouter.delete('/user', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// POST /user/login
// body: { username: string, password: hash }
userRouter.post('/user/login', (req, res) => {
    res.status(200).json({ status: 'ok' });
})

// POST /user/logout
// body: { username: string }
userRouter.post('/user/logout', (req, res) => {
    res.status(200).json({ status: 'ok' });
})
