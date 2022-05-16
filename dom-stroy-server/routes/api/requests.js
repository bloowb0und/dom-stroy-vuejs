const express = require('express');
const Database = require("sqlite-async");

const router = express.Router();

//get
router.get('/',async (req, res) => {
    await Database.open('../domstroy.sqlite')
        .then(async db => {
            //const sql = 'SELECT title,desc,image FROM Projects';
            const sql = `SELECT Requests.id, Requests.fullname, Requests.phone, Requests.date, Projects.title FROM Requests INNER JOIN Projects on Requests.project_id = Projects.id`;
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

//post
router.post('/', async(req,res) => {
    await Database.open('../domstroy.sqlite')
        .then(async db => {
            var currentdate = new Date();
            var datetime = currentdate.getDate() + "."
                + (currentdate.getMonth()+1)  + "."
                + currentdate.getFullYear() + " . "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
            const sql = `INSERT INTO Requests(fullname, phone, date, project_id) VALUES(?,?,?,?)`;
            let result = await db.run(sql,[req.body.fullname, req.body.phone, datetime, req.body.project_id]);

            console.log(result);
            console.log(req.body.project_id);
            db.close();

            res.status(201).send();
            res = true;
        })
        .catch((e) => {
            if(e)
            {
                console.log(e.message);
                res = false
                res.status(500).send();
                return false;
            }
        })
})

//delete
router.delete('/:id', async (req, res) => {
    await Database.open('../domstroy.sqlite')
        .then(async db => {
            const sql = 'DELETE FROM Requests WHERE id = (?)';
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

module.exports = router;