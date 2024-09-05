import { useSelector, useDispatch } from "react-redux";
import { healthAction } from "../Redux-store/healthSlice";
import { useCallback, useEffect} from "react";
import { Card ,Button} from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const HealthList = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const health = useSelector((state) => state.health.health);

    console.log('health----------------->', health);


    const deleteHandler = async (id) => {
        if (window.confirm("Are you sure you want to delete this entry?")) {
            try {
                const response = await fetch(`http://localhost:7000/api/delete/${id}`, {
                    method: "DELETE",
                    headers: {
                         'Content-Type': 'application/json',
                         "Authorization": `${token}`
                    }
                });
    
                const data = await response.json();
    
                if (!response.ok) {
                    throw new Error(`${data.message}`);
                } else {
                    dispatch(healthAction.deleteHealth({_id: id})); // Dispatch the delete action to update Redux state
                    toast.success("Entry deleted successfully!");
                }
            } catch (error) {
                console.log("An error occurred:", error);
                toast.error(`An error occurred: ${error.message}`);
            }
        }
    };
    
    

    const getHealth = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:7000/api/gethealth', {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `${token}`
                }
            });

            const data = await response.json();
         

            if (!response.ok) {
                throw new Error(`${data.message}`);
            } else {
                dispatch(healthAction.setHealth(data.health));
            }
        } catch (error) {
            console.log(error);
        }
    }, [token, dispatch]);

    useEffect(() => {
        getHealth();
    }, [getHealth]);

    const healthlist = health.map((val, index) => {
        // Convert the Date object to a readable format
        const formattedDate = val.entrydate ? new Date(val.entrydate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }) : 'N/A';

        return (
            <Card key={index} className="d-flex flex-row justify-content-between align-items-center my-2 p-2 w-50 m-auto" >
                <div>
                    <p>{val.mood}</p>
                    <p>{formattedDate}</p>
                    <p>{val.notes}</p>
                </div>
                <div className="">
                    <Button variant="danger" onClick={() => deleteHandler(val._id)}><MdDelete /></Button>
                </div>
            </Card>
        );
    });

    return (
        <>
        <ToastContainer/>
           { healthlist}
        </>
    );
};

export default HealthList;
