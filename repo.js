const masterData = {
    nodeId: "CRISP-MASTER-01",
    tier: "Administrator",
    clearanceLevel: "Level 5"
};

function showSuccess() {
    document.getElementById('stepGate').classList.add('hidden');
    document.getElementById('resNode').innerText = masterData.nodeId;
    document.getElementById('resTier').innerText = masterData.tier;
    document.getElementById('resCode').innerText = 'CRISP-MSTR-' + Math.random().toString(36).substring(2, 7).toUpperCase();
    
    document.getElementById('stepPass').classList.remove('hidden');
}
