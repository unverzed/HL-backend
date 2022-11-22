import db from "../database/db.js";

export async function postTicket(idLocal, idResponsible, data){
    const { name, sendEmailTo } = data;
    const progress = `pendente`
    data;
    return db.query(
      `INSERT INTO tickets ("idResp", "idLocal", title, "userReceived", status) VALUES ($1, $2, $3, $4, $5)`,
      [idResponsible, idLocal, name, sendEmailTo, progress]
    );
}

const ticketRepository = { postTicket}
export default ticketRepository;