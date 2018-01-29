import { CREATE_AUCTION, CREATE_AUCTION_SUCESS, CREATE_AUCTION_FAIL } from '../todo.actions';


export interface createAuctionState {
    auctionCreatorUid: any,
    productName: string,
    productDescription: string,
    auctionEndDate: any,
    endTime: any,
    FirstBiding: number,
    category: string
}


export const INITIAL_CREATE_AUCTION_STATE: createAuctionState = {
    auctionCreatorUid: "",
    productName: "",
    productDescription: "",
    auctionEndDate: "",
    endTime: "",
    FirstBiding: 0,
    category: ""
}

export function CreateAuctionReducer(state: createAuctionState = INITIAL_CREATE_AUCTION_STATE, action) {
    switch (action.type) {
        case CREATE_AUCTION_SUCESS:
            console.log(action.payload);
            return Object.assign({}, state, {

                auctionCreatorUid:   action.payload.auctionCreatorUid,
                productName:         action.payload.productName,
                productDescription:  action.payload.productDescription,
                auctionEndDate:      action.payload.auctionEndDate,
                endTime:             action.payload.endTime,
                FirstBiding:         action.payload.FirstBiding,
                category:            action.payload.selectCategory
            });

        case CREATE_AUCTION_FAIL:
            console.log(action.payload);
            return Object.assign({}, state, {

                auctionCreatorUid:   action.payload.auctionCreatorUid,
                productName:         action.payload.productName,
                productDescription:  action.payload.productDescription,
                auctionEndDate:      action.payload.auctionEndDate,
                endTime:             action.payload.endTime,
                FirstBiding:         action.payload.FirstBiding,
                category:            action.payload.selectCategory
            });
    }
    return state;
}