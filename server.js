const express = require('express')
const app = express()
const port = 9003


app.use(express.text({limit : '5mb'}))
app.use(express.json({limit : '5mb'}))


app.use('/api/produk', require('./routes/produk'))
app.use('/upload', require('./routes/upload'))


app.listen(port, () => {
    console.log(`Server berjalan di port : ${port}`);
    
})