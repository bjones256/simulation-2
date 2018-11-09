module.exports ={
    getHouses(req,res) {
        console.log('get houses endpoint hit')
        let db = req.app.get('db')
        db.get_houses().then(response => {
            console.log('found the houses')
            res.status(200).send(response)
        }).catch(err => {
            console.log("something's fucky", err)
            send.status(500).send(err)
        })
    },
    createHouse(req,res) {
        let db = req.app.get('db')
        let {name,address,city,state,zip} =req.body
        console.log('building a house',req.body)
        //need to convert zip to a number but shit ain't werkin
        db.build_house([name,address,city,state,zip]).then(response => {
            console.log('house built')
            res.status(200).send(response)
        }).catch(err => {
            console.log('house burned down', err)
            send.status(500).send(err)
        })
    },
    deleteHouse(req,res) {
        let db = req.app.get('db')
        let {id} = req.params
        console.log('deleting house from db',id)
        db.delete_house({id}).then( response => {
            res.status(200).send(response)
            console.log('deleted that dump')
        })
    }
}