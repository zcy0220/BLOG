/**
 * session
 */

const key = 'SESSION-ID'

const sessions = {}

const generate = () => {
    const session = {}
    session.id = (new Date()).getTime() + Math.random()
    sessions[session.id] = session
    return session    
}

const setSession = (ctx, {id, name}) => {
    ctx.session = generate()
    ctx.session.userId = id
    ctx.session.userName = name
    ctx.cookies.set(key, ctx.session.id)
}

module.exports = {
    key,
    sessions,
    generate,
    setSession
}