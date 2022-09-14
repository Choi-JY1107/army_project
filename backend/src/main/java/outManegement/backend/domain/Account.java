package outManegement.backend.domain;

import lombok.Getter;
import lombok.Setter;
import outManegement.backend.domain.enumcollect.Permission;
import outManegement.backend.domain.enumcollect.Rank;

@Getter
@Setter
public class Account {
    private Long memberId;
    private String userName;
    private String serviceNumber;
    private String phoneNumber;
    private Unit unit;
    private Rank rank;
    private String position;
    private Permission permission;

    public Account() {

    }

    public Account(String userName, String serviceNumber, String phoneNumber, Unit unit,
                   Rank rank, String position, Permission permission) {
        this.userName = userName;
        this.serviceNumber = serviceNumber;
        this.phoneNumber = phoneNumber;
        this.unit = unit;
        this.rank = rank;
        this.position = position;
        this.permission = permission;
    }

}