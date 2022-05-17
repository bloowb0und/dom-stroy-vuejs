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
    static postProject(title,desc, location, area, budget, architect, contractor, start_date, end_date, text1, text2,text3, images_folder) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(url, {title : title, desc : desc, technologies: technologies, location: location, area: area, budget: budget, architect: architect, contractor: contractor, start_date: start_date, end_date: end_date, text1: text1, text2: text2, text3: text3, images_folder: images_folder});
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
    static putProject(title,desc,image, location, year, places, floors, id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.put(url + `/${id}`, {title : title, desc : desc, image: image, location: location, year: year, places: places, floors: floors});
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
    static deleteProject(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.delete(url+`/${id}`);
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
}

export default ProjectService;