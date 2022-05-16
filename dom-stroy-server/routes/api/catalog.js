const express = require('express');
const Database = require("sqlite-async");

const router = express.Router();

//get
router.get('/',async (req, res) => {
    await Database.open('../domstroy.sqlite')
        .then(async db => {
            //const sql = 'SELECT title,desc,image FROM Projects';
            const sql = `SELECT * FROM Projects`;
            let result = await db.all(sql, []);
            //console.log(result)

            db.close();

            res.send(result);
        })
        .catch(err => {
            if(err) {
                console.log(err.message);
                res.status(500);
                return false;
            }
        });
})

router.get('/:id', async(req,res) => {
    await Database.open('../domstroy.sqlite')
        .then(async db => {
            const sql = 'SELECT * FROM Projects WHERE id = ' + req.params.id;
            let result = await db.all(sql,[]);

            console.log(result)
            db.close();

            res.send(result);
        })
        .catch(err => {
            if(err){
                console.log(err.message);
                res.status(500);
                return false;
            }
        })
})

//delete
router.delete('/:id', async (req, res) => {
    await Database.open('../domstroy.sqlite')
        .then(async db => {
            const sql = 'DELETE FROM Projects WHERE id = (?)';
            let result = await db.run(sql, [req.params.id]);

            db.close();

            res.status(201).send();
            res = true;
        })
        .catch(err => {
            if (err) {
                console.log(err.message)
                res = false;
                res.status(500).send();
                return false;
            }
        });
})
router.put('/:id', async (req, res) => {
    await Database.open('../domstroy.sqlite')
        .then(async db => {
            const sql = 'UPDATE Projects SET title = (?), desc = (?), technologies = (?), location = (?), area = (?), budget = (?), architect = (?), contractor = (?), start_date = (?), end_date = (?), text1 = (?), text2 = (?), text3 = (?), images_folder = (?) WHERE id = (?)';
            let result = await db.run(sql, [req.body.title,req.body.desc, req.body.technologies, req.body.location, req.body.area, req.body.budget, req.body.architect, req.body.contractor, req.body.start_date, req.body.end_date, req.body.text1, req.body.text2, req.body.text3, req.body.images_folder, req.params.id]);

            db.close();

            res.status(201).send();
            res = true;
        })
        .catch(err => {
            if (err) {
                console.log(err.message)
                res = false;
                res.status(500).send();
                return false;
            }
        });
})

router.post('/', async (req, res) => {
    await Database.open('../domstroy.sqlite')
        .then(async db => {
            const sql = `INSERT INTO Projects(title,desc,technologies, location, area, budget, architect, contractor, start_date, end_date, text1, text2, text3, images_folder) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            let result = await db.run(sql,[req.body.title,req.body.desc, req.body.technologies, req.body.location, req.body.area, req.body.budget, req.body.architect, req.body.contractor, req.body.start_date, req.body.end_date, req.body.text1, req.body.text2, req.body.text3, req.body.images_folder]);

            db.close();

            res.status(201).send();
            res = true;
        })
        .catch(err => {
            if (err) {
                console.log(err.message)
                res = false;
                res.status(500).send();
                return false;
            }
        });
})

module.exports = router;