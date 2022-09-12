export async function getAddress(ip = '8.8.8.8'){
    const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_SV2t9Zwn49tTWDNXd4Yq92ZNx7JgF&ipAddress=${ip}`)
    
    return await response.json()
    
}