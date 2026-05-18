"use strict";
function listarMissoes(missoes) {
    for (const m of missoes) {
        console.log(`- [${m.status.toUpperCase()}] ${m.titulo} (Dif: ${m.dificuldade}, Moedas: ${m.recompensa})`);
    }
}
function listarPendentes(missoes) {
    console.log("Missões Pendentes:");
    for (const missao of missoes) {
        if (missao.status === "pendente") {
            console.log(`* ${missao.titulo}`);
        }
    }
}
function calcularRecompensaConcluida(missoes) {
    let total = 0;
    for (const missao of missoes) {
        if (missao.status === "concluída") {
            total += missao.recompensa;
        }
    }
    return total;
}
function alterarStatus(missoes, titulo, novoStatus) {
    for (const missao of missoes) {
        if (missao.titulo === titulo) {
            missao.status = novoStatus;
            return true;
        }
    }
    return false;
}
const bancoMissoes = [
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
}
else {
    console.log("Missão não encontrada.");
}
console.log("-----------------------------");
console.log("--- Todas as Missões Atualizadas ---");
listarMissoes(bancoMissoes);
const novaRecompensaTotal = calcularRecompensaConcluida(bancoMissoes);
console.log(`Nova recompensa total das missões concluídas: ${novaRecompensaTotal} moedas`);
