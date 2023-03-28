import brcrypt from 'bcryptjs';
import db from '../models/index'
const salt = brcrypt.genSaltSync(10)

let createNewUser = async (data)=> {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password)
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? true: false,
                roleId: data.roleId,
            })

            resolve('OK create a new user succeed!!!')
        } catch(e) {
            reject(e)
        }
    })
}

let hashUserPassword = (password)=> {
    return new Promise(async (resolve, reject)=> {
        try {
            let hashPassword = await brcrypt.hashSync(password, salt)
            resolve(hashPassword)
        } catch (e) {
            reject(e)
        }
    })
}

let getUserAll = ()=> {
    return new Promise(async (resolve, reject) => {
        try {
            let user = db.User.findAll({
                raw: true
            })
            resolve(user)
        } catch(e) {
            reject(e)
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
    getUserAll: getUserAll
}