import { useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import CartItem from "./CartItem";
import { calcTotal } from "../../utils/cost";
import { Badge, Button, IconButton, Typography } from "@mui/material";
import Modal from "../common/Modal";
import { currFormat } from "../../utils/currency";
import EmptyCart from "../Cartscreen/EmptyCart";
import { useAppSelector } from "../../store";

export default function MenuListComposition() {
  const [open, setOpen] = useState<boolean>(false);
  const { cartItems } = useAppSelector((state) => state.cart);

  const numOfItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
  let total = cartItems.reduce(
    (acc, item) => acc + calcTotal(item.discount, item.price, item.qty),
    0
  );

  const isEmpty = numOfItems === 0;

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <Badge badgeContent={cartItems.length} color="primary">
          <BiCartAlt className="cursor-pointer btn p-0" />
        </Badge>
      </IconButton>

      <Modal
        open={open}
        minWidth="700px"
        onClose={() => {
          setOpen(false);
        }}
      >
        {isEmpty ? (
          <div className="p-4 w-full">
            <EmptyCart variant="h5" />
          </div>
        ) : (
          <div>
            <Typography className="text-center" variant="h5">
              Your cart ({numOfItems})
            </Typography>
            <div className="my-9">
              {cartItems.map((cartItem, idx) => (
                <CartItem cartItem={cartItem} key={idx} />
              ))}
            </div>

            <div className="w-full flex justify-between items-center p-4 my-5 bg-light-black text-white ">
              <h1 className="font-medium capitalize tracking-wide text-xl ">
                Total
              </h1>
              <p className="font-bold text-xl">{currFormat(total)}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="dark-outlined" fullWidth href="/cart/1">
                View Cart
              </Button>
              <Button variant="dark" fullWidth href="/checkouts">
                Buy now
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
