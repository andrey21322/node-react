const {Router} = require('express')
const Post = require('../models/Post')
const router = Router()

router.get('/posts', async (req, res) => {
    try {
        const items = await Post.find()
        res.send({items})
    } catch(e) {
        res.status(500).json({message: 'Ошибка вывода'})
    }
})

router.post('/add', async (req, res) => {
    try {
        const {descr} = req.body
        const post = new Post({descr})

        await post.save()
        res.status(201).json({ message : 'Пост создан' })
        console.log(descr)
    } catch(e) {
        res.status(500).json({ message: 'Ошибка добавления' })
    }
})
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        await Post.findByIdAndDelete(id)
        await Post.save()
        res.json({ message: 'deleted' })
    } catch(e) {
        console.log(e.message)
        res.status(500).json({message: 'Ошибка удаления'})
    }
})
router.put('/update', async (req, res) => {
    const {descr, id} = req.body

    try {
        
        let item = await Post.findByIdAndUpdate(id, {descr: descr})
        await item.save()

        res.json({ message:'Данные обновлены' })
    } catch(e) {
        res.status(500).json({message: 'Ошибка изменения'})
        console.log(e.message)
    }
})


module.exports = router