import {
  EntitySubscriberInterface,
  EventSubscriber,
  UpdateEvent,
} from "typeorm";
import { User } from "./user.entity";
import { Logger } from "@nestjs/common";

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  listenTo(): any {
    return User;
  }

  afterUpdate(event: UpdateEvent<User>): void | Promise<any> {
    const updatedUser = event.updatedColumns.find(
      (value) => value.propertyName,
      User.prototype.first_name,
    );
    if (updatedUser) {
      Logger.log(
        `first_name changed from ${event.databaseEntity.first_name} to ${event.entity.first_name}`,
      );
    }
  }
}
