package outManegement.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import outManegement.backend.dao.Account;
import outManegement.backend.repository.AccountRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AccountService {
    AccountRepository accountRepository;

    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public Long join(Account account){
        //vaildAccountID(account);
        accountRepository.save(account);
        return account.getId();
    }

    private void vaildAccountID(Account account) {
        if(accountRepository.findById(account.getId()).isPresent())
            throw new IllegalStateException("이미 존재하는 회원입니다.");
    }

    public List<Account> findAll(){
        return accountRepository.findAllMember();
    }

    public Optional<Account> findById(Long id){
        return accountRepository.findById(id);
    }

    public void deleteById(Long id){
        accountRepository.deleteById(id);
    }
}
