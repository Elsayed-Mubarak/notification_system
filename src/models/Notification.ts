import mongoose, { model, Schema, Document } from "mongoose";
import { notificationType } from './enums/NotificationType';
import { Status } from './enums/NotificationStatus';

export interface INotification extends Document {
    title: String,
    body: String,
    type: String,
    status?: Status
}

const NotificationSchema: Schema = new Schema({
    notificationId: {
        type: mongoose.Types.ObjectId,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    groupId: {
        type: mongoose.Types.ObjectId,
        ref: "Group",
    },
    type: {
        type: String,
        enum: Object.values(notificationType),
        default: notificationType.PUSH_NOTIFICATION,
        required: true
    },
    status: {
        type: String,
        enum: Object.values(Status),
        default: Status.PENDING
    },
    creationDate: {
        type: Date,
        defult: new Date()
    }
},
    { timestamps: true })

export default model<INotification>('Notification', NotificationSchema)