import { SetMetadata } from "@nestjs/common"
import { Roles as Role } from "src/common/enums/role"
import { UserStatus } from "src/common/enums/user.status"

export const ROLES_KEY = 'roles'
export const Roles =(...roles:Role[]) => SetMetadata(ROLES_KEY , roles)