import db from '../models/index'
import brcrypt from 'bcryptjs';
const salt = brcrypt.genSaltSync(10)

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

let handleUserLogin = (email, password)=> {
    return new Promise(async (resolve, reject)=> {
        try {   
            let userData = {}
            let isExist = await checkUserEmail(email)
            if (isExist) {
                // user already exist
                
                let user = await db.User.findOne({
                    attributes: ['email', 'roleId', 'password'],
                    where: {email: email},
                    raw: true
                })
                
                if (user) {
                    // compare password
                    let check = await brcrypt.compareSync(password, user.password)
                    if (check) {
                        userData.errCode = 0
                        userData.errMessage = 'OK'
                        delete user.password
                        userData.user = user
                    } else {
                        userData.errCode = 3
                        userData.errMessage = 'Wrong password'
                    }
                    
                } else {
                    userData.errCode = 2 
                    userData.errMessage = `User not found` 
                    resolve(userData)
                }
            } else {
                // return error
                userData.errCode = 1    
                userData.errMessage = `Your's Email isn't exist in your system` 
            }
            resolve(userData)
        } catch(e) {
            reject(e)
        }
    })
}

let checkUserEmail = (userEmail)=> {
    return new Promise(async (resolve, reject)=> {
        try {
            let user = await db.User.findOne({
                where: {email: userEmail}
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch(e) {
            reject(e)
        }
    })
}

let getAllUsers = (userId)=> {
    return new Promise(async (resolve, reject)=>{
        try{
            let users = ''
            if (userId === 'ALL') {
                users = await db.User.findAll({
                    attributes: {
                        exclude: ['password']
                    }
                })
            } 
            if (userId && userId !== 'ALL') {
                users = await db.User.findOne({
                    where: {id: userId},         
                    attributes: {
                        exclude: ['password']
                    }
                })
            }
            resolve(users)
        } catch(e) {
            reject(e)
        }
    })
}

let createNewUser = (data)=> {
    return new Promise(async (resolve, reject)=> {
        try {
            let check = await checkUserEmail(data.email)
            if (check === true) {
                resolve({
                    errCode:1,
                    errMessage: 'Your email is already in used'
                })
            } else {
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
    
                resolve({
                    errCode:0,
                    message: 'OK'
                })
            }
        } catch(e) {
            reject(e)
        }
    })
}

let deleteUser = (userId)=> {
    return new Promise(async (resolve, reject)=> {
        let user = await db.User.findOne({
            where: {id: userId}
        })
        if (!user) {
            resolve({
                errCode: 2,
                errMessage: `User isn't exist`
            })
        }

        await db.User.destroy({
            where: {id: userId}
        })

        resolve({
            errCode: 0,
            message: 'User is the deleted'
        })
    })
}

let updateUserData = (data)=> {
    return new Promise(async (resolve, reject)=> {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: 'Missing required parameters'
                })
            }
            let user = await db.User.findOne({
                where: { id: data.id },
                raw: false

            })
            if (user) {
                user.firstName = data.firstName
                user.lastName = data.lastName
                user.address = data.address
                
                await user.save()
                // await db.User.save({
                //     firstName: data.firstName,
                //     lastName: data.lastName,
                //     address: data.address
                // })

                resolve({
                    errCode: 0,
                    message: 'Update the user success.'
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'user not found'
                });
            }
        }catch(e) {
            reject(e)
        }
    })
}

let getAllCodeService = (typeInput)=> {
    return new Promise(async (resolve, reject)=> {
        try {
            if (!typeInput) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameters.'
                })
            } else {
                let res = {}
                let allCode = await db.Allcode.findAll({
                    where: {type: typeInput}
                })
                res.errCode = 0
                res.data = allCode
                resolve(res)
            }
        } catch (e) {
            reject(e)
        }
    })
}


module.exports = {
    handleUserLogin: handleUserLogin,
    getAllUsers: getAllUsers,
    createNewUser: createNewUser,
    deleteUser: deleteUser,
    updateUserData: updateUserData,
    getAllCodeService: getAllCodeService
}