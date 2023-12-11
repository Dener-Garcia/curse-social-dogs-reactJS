## Criando rotas nested

Para criar uma rota nestest ou seja dentro de uma rota tenho outra rota

para criar rotas que tem sub rotas temos sempre que lembrar de por o /*
> <Route path="/login/*" element={ <Login /> } />

Agora dentro do componente que desejamos criar as rotas nested vamos configuarar o routes, todas as rotas abaixou são /login/NomeComponente

``` javascript
  <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="criar" element={<LoginCreate />} />
      <Route path="perdeu" element={<LoginPasswordLost />} />
      <Route path="reset" element={<LoginPasswordReset />} />
  </Routes>
```
## Rota protegida com react router dom

Basta verificar se if do login, setLogin em userContext esta ativo