import React, { Component } from "react";
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Main from '../template/Main';
import './UserCrud.css' // Importa o css com o layout fixo e scroll interno

const headerProps ={
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
};

const baseUrl = 'http://localhost:3001/users';
const initialState = {
    user: { name: '',email: ''},
    list: []
};

export default class UserCrud extends Component{
    state = { ...initialState };
    componentDidMount(){
        axios(baseUrl)
            .then(resp => this.setState({list: resp.data}))
            .catch(err => console.error("Erro ao carregar usuários: ", err));
    }

    clear(){
        this.setState({ user: initialState.user});
    }

    save(){
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;

        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdateList(resp.data);
                this.setState({ user: initialState.user, list});
            })
            .catch(err => console.error("Erro ao salvar usuário:", err));
    }
}