/user
routerUser.post('/', User); //criar usuário
routerUser.get('/', allUsers); //buscar usuários
routerUser.delete('/:id', userDelete); //deletar um usuário e suas contas
routerUser.put('/:id', userUpdate) //atualizar um usuário

/contact
routerContact.post('/', Contacts); //criar um contato
routerContact.get('/', allContacts); //buscar contatos
routerContact.delete('/:id', contactDelete); //deletar contato de um usuário
routerContact.put('/:id', contactUpdate) //atualizar um contato