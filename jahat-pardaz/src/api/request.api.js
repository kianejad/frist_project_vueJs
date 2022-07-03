import http from "@/services/http.service";

export async function getRequest(filter, sortOne, sortTwo) {
    console.log(filter, sortOne, sortTwo);
    try {
        const response = await http.get(
            `/ticket?${filter?.status ? `Ticket_status=${filter.status}` : ""}${
                filter?.dueDate ? `&Maturity_status=${filter.dueDate}` : ""
            }${filter?.priority ? `&preference=${filter.priority}` : ""}${
                filter?.category ? `&category=${filter.category}` : ""
            }${
                sortOne?.createAt ? `&_sort=createdAt&_order=${sortOne.createAt}` : ""
            }${
                sortTwo?.replyDate ? `&_sort=replyDate&_order=${sortTwo.replyDate}` : ""
            }`
        );
        console.log(response.data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteRequest(id) {
    try {
        const response = await http.delete(`/ticket/${id}`);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}

export async function editRequest(id, data) {
    try {
        const response = await http.patch(`/ticket/${id}`, data);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}

export async function requestPriority() {
    try {
        const response = await http.get("/ticket?&preference= فوری");
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}

export async function requestStatus() {
    try {
        const response = await http.get("/ticket?&Ticket_status= جدید");
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}
