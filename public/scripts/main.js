window.onload = () => {
    const userNameText = document.getElementById('username-text')
    const accountBtn = document.getElementById('account-btn')
    const mask = document.getElementById('mask')
    const accountPop = document.getElementById('account-pop')
    const showSignUp = document.getElementById('show-sign-up')
    const showSignIn = document.getElementById('show-sign-in')
    const signInContent = document.getElementById('sign-in-content')
    const signUpContent = document.getElementById('sign-up-content')
    const signIn = document.getElementById('sign-in')
    const signInUserName = document.getElementById('sign-in-username')
    const signInPassword = document.getElementById('sign-in-password')
    const signUp = document.getElementById('sign-up')
    const signUpUserName = document.getElementById('sign-up-username')
    const signUpPassword = document.getElementById('sign-up-password')
    const signUpConfirmPassword = document.getElementById('sign-up-confirm')

    /**
     * 弹出登录框
     */
    accountBtn.addEventListener('click', e => {
        e.preventDefault()
        accountPop.style.display = 'block'
        mask.style.display = 'block'
        mask.style.width = window.screen.width + 'px'
        mask.style.height = window.screen.height + 'px'
    })

    /**
     * 关闭
     */
    const close = () => {
        accountPop.style.display = 'none'
        mask.style.display = 'none'
        signInContent.style.display = 'block'
        signUpContent.style.display = 'none'
        showSignUp.style.display = 'block'
        showSignIn.style.display = 'none'
    }

    /**
     * 登录成功
     */
    const success = (info) => {
        close()
        userNameText.style.display = 'block'
        userNameText.textContent = info.userName
        accountBtn.style.display = 'none'
    }

    /**
     * 点击遮罩处关闭
     */
    mask.addEventListener('click', close)

    /**
     * 显示注册
     */
    showSignUp.addEventListener('click', e => {
        e.preventDefault()
        signInContent.style.display = 'none'
        signUpContent.style.display = 'block'
        showSignUp.style.display = 'none'
        showSignIn.style.display = 'block'
    })

    /**
     * 显示登录
     */
    showSignIn.addEventListener('click', e => {
        e.preventDefault()
        signInContent.style.display = 'block'
        signUpContent.style.display = 'none'
        showSignUp.style.display = 'block'
        showSignIn.style.display = 'none'
    })

    /**
     * 登录
     */
    signIn.addEventListener('click', e => {
        e.preventDefault()
        const userName = signInUserName.value
        const password = signInPassword.value
        if (userName == '' || password == '') {
            alert('用户名密码不能为空！')
            return
        }
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                success(JSON.parse(xhr.responseText))
            }
        }
        xhr.open('post', '/api/signIn', true)
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
        xhr.send(`userName=${userName}&password=${password}`)
    })

    /**
     * 注册
     */
    signUp.addEventListener('click', e => {
        e.preventDefault()
        const userName = signUpUserName.value
        const password = signUpPassword.value
        const confirmPassword = signUpConfirmPassword.value
        if (userName == '' || password == '' || confirmPassword == '') {
            alert('用户名密码不能为空！')
            return
        }
        if (password != confirmPassword) {
            alert('确认密码错误！')
            return
        }
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                success(JSON.parse(xhr.responseText))
            }
        }
        xhr.open('post', '/api/signUp', true)
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
        xhr.send(`userName=${userName}&password=${password}`)
    })

    const commentBtn = document.getElementById('comment-btn')
    const commentContent = document.getElementById('comment-content')
    const conments = document.getElementById('conments')
    commentBtn.onclick = e => {
        e.preventDefault()
        const blogId = window.location.href.split('/').pop()
        const content = commentContent.value
        if (content.trim() == '') {
            alert('评论内容不能为空！')
            return
        }
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const info = JSON.parse(xhr.responseText)
                if (info.error == 0) {
                    accountPop.style.display = 'block'
                    mask.style.display = 'block'
                    mask.style.width = window.screen.width + 'px'
                    mask.style.height = window.screen.height + 'px'
                } else {
                    const li = document.createElement('li')
                    conments.appendChild(li)
                    const h3 = document.createElement('h3')
                    h3.innerHTML = info.userName
                    li.appendChild(h3)
                    const p = document.createElement('p')
                    p.innerHTML = info.content
                    li.appendChild(p)
                }
            }
        }
        xhr.open('post', '/blogs/comment', true)
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
        xhr.send(`blogId=${blogId}&content=${content}`)
    }

}