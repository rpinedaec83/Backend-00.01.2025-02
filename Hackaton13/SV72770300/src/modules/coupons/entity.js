import mongoose from "../../config/db/index.js";

const Schema = mongoose.Schema;

const CouponsSchema = new Schema({
    course: {
        type: Schema.Types.ObjectId,
        ref: "Courses",
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    dateFrom: {
        type: Date,
        default: Date.now,
    },

    dateUntil: {
        type: Date,
    },

    active: {
        type: Boolean,
        default: true,
    },
});

const CouponsModel = mongoose.model("discountcoupons", CouponsSchema);

export default CouponsModel;