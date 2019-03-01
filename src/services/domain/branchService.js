import http from "../httpService";
import {apiUrl, apiVersion} from "../../config.json";

export async function getBranchesRange(pageIndex = 0){
    return await http.get(apiUrl + apiVersion + "/branches/" + pageIndex);
}

export async function addBranch(branch){
    return await http.post(apiUrl + apiVersion + "/branch", branch);
}

export async function updateBranch(branch){
    return await http.put(apiUrl + apiVersion + "/branch", branch);
}

export async function deleteBranch(id){
    return await http.delete(apiUrl + apiVersion + "/branch/" + id);
}

export default {
    getBranchesRange,
    addBranch,
    updateBranch,
    deleteBranch
}