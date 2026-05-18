type StatusMissao = "pendente" | "em andamento" | "concluída"; 

type Missao = { 
    titulo: string; 
    dificuldade: number; 
    recompensa: number; 
    status: StatusMissao; 
};

function listarMissoes(missoes: Missao[]): void {
    for (const m of missoes) {
        console.log(`- [${m.status.toUpperCase()}] ${m.titulo} (Dif: ${m.dificuldade}, Moedas: ${m.recompensa})`);
    }
}

function listarPendentes(missoes: Missao[]): void {
    console.log("Missões Pendentes:");
    for (const missao of missoes) { 
        if (missao.status === "pendente") { 
            console.log(`* ${missao.titulo}`); 
        }
    }
}

function calcularRecompensaConcluida(missoes: Missao[]): number {
    let total = 0; 
    for (const missao of missoes) { 
        if (missao.status === "concluída") { 
            total += missao.recompensa; 
        }
    }
    return total; 
}

function alterarStatus(missoes: Missao[], titulo: string, novoStatus: StatusMissao): boolean {
    for (const missao of missoes) { 
        if (missao.titulo === titulo) { 
            missao.status = novoStatus; 
            return true; 
        }
    }
    return false; 
}


const bancoMissoes: Missao[] = [
    { titulo: "Resgatar o ferreiro da vila", dificuldade: 3, recompensa: 120, status: "pendente" }, 
    { titulo: "Derrotar o dragão da montanha", dificuldade: 10, recompensa: 1000, status: "em andamento" }, 
    { titulo: "Encontrar a relíquia perdida", dificuldade: 7, recompensa: 500, status: "concluída" }, 
    { titulo: "Escoltar o mercador", dificuldade: 4, recompensa: 200, status: "pendente" }, 
    { titulo: "Explorar as ruínas antigas", dificuldade: 6, recompensa: 350, status: "concluída" } 
];

console.log("--- Todas as Missões Iniciais ---");
listarMissoes(bancoMissoes); 

console.log("\n-----------------------------");
listarPendentes(bancoMissoes); 

console.log("-----------------------------");
let recompensaTotal = calcularRecompensaConcluida(bancoMissoes); 
console.log(`Recompensa total das missões concluídas: ${recompensaTotal} moedas`); 

console.log("-----------------------------");
const alterou = alterarStatus(bancoMissoes, "Resgatar o ferreiro da vila", "concluída"); 
if (alterou) { 
    console.log("Status da missão alterado com sucesso."); 
} else { 
    console.log("Missão não encontrada."); 
}

console.log("-----------------------------");
console.log("--- Todas as Missões Atualizadas ---");
listarMissoes(bancoMissoes); 

const novaRecompensaTotal = calcularRecompensaConcluida(bancoMissoes); 
console.log(`Nova recompensa total das missões concluídas: ${novaRecompensaTotal} moedas`); 