const axios = require('axios');

const url = 'http://localhost:5000/api/catalog';


class ProjectService {
    static getProjects()
    {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const obj = res.data;
                console.log('res:');
                console.log(res);
                resolve(
                    obj.map(project => ({
                        ...project,
                    }))
                )
            }
            catch (e)
            {
                reject(e);
            }
        })
    }
    static getProjectsId(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url + `/${id}`);
                const obj = res.data;
                console.log("res:");
                console.log(res);
                const fin = obj.map(project => ({
                    ...project
                }))
                resolve(fin[0]);
            }
            catch (e)
            {
                reject(e);
            }
        })
    }
    static postProject(title,desc, location, area, budget, architect, contractor, start_date, end_date, text1, text2,text3, images_folder, technologies) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(url, {title,desc, location, area, budget, architect, contractor, start_date, end_date, text1, text2,text3, images_folder, technologies});
                const obj = res.data;
                console.log("res:");
                console.log(res);

                resolve(obj);
            }
            catch (e)
            {
                reject(e);
            }
        })
    }
    static putProject(title,desc, location, area, budget, architect, contractor, start_date, end_date, text1, text2,text3, images_folder, technologies, id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.put(url + `/${id}`, {title,desc, location, area, budget, architect, contractor, start_date, end_date, text1, text2,text3, images_folder, technologies});
                const obj = res.data;
                console.log("res:");
                console.log(res);

                resolve(obj);
            }
            catch (e)
            {
                reject(e);
            }
        })
    }
    static deleteProject(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.delete(url+`/${id}`);
                const obj = res.data;
                console.log("res:");
                console.log(res);

                resolve(obj);
            }
            catch (e)
            {
                reject(e);
            }
        })
    }
}

export default ProjectService;