const Form = styled.form`
   width: 100%;    
   onSubmit:${(props)=> props.aoEnviar} 
`;

/*Não precisamos dessa propriedade aoEnviar já que o componente que estamos criando será uma tag form do html, 
então poderíamos passar diretamente a propriedade onSubmit na hora de usarmos o componente e não na declaração dele.

Não precisamos dessa propriedade aoEnviar já que o componente que estamos criando será uma tag form do html, 
então poderíamos passar diretamente a propriedade onSubmit na hora de usarmos o componente e não na declaração dele*/

<Form aoEnviar={()=> {
    console.log('Done.')
}}>
...
</Form>
