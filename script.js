        // Construtor do objeto Pet
        function Pet(nome, especie, idade) {
            this.nome = nome;
            this.especie = especie;
            this.idade = idade;
            this.falar = function() {
                return `Oi, eu sou ${this.nome} sou um ${this.especie} e tenho ${this.idade} anos (idade humana: ${this.idadeHumana()})`;
            };

            this.idadeHumana = function() {
                if (this.especie === "Cachorro") {
                    return this.idade * 7;
                } else if (this.especie === "Gato") {
                    return this.idade * 6;
                } else {
                    return this.idade * 5;
                }
            };
        }

        const meusPets = [];

        // Cadastrar pet pelo formulário
        document.getElementById("formPet").addEventListener("submit", event =>{
            event.preventDefault();
            const nome = document.getElementById("nome").value;
            const especie = document.getElementById("especie").value;
            const idade = parseInt(document.getElementById("idade").value);

            cadastrarPet(nome, especie, idade);

            // Limpa os campos
            this.reset();
        });

        function cadastrarPet(nome, especie, idade) {
            const novoPet = new Pet(nome, especie, idade);
            meusPets.push(novoPet);
            alert(`Pet ${nome} cadastrado com sucesso!`);

            console.log(novoPet.falar())
        }

        //Buscar pelo nome do pet
        function buscarPet(nome) {
            const petEncontrado = meusPets.find(pet => pet.nome.toLowerCase() === nome.toLowerCase());
            if (petEncontrado) {
                console.log(`Pet encontrado: ${petEncontrado.falar()} e tenho ${petEncontrado.idadeHumana()} anos humanos.`);
            } else {
                console.log("Pet não encontrado.");
            }
        }